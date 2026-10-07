import { Kafka } from "kafkajs";
import dotenv from "dotenv";

dotenv.config();

console.log("CONSUMER BROKER:", process.env.KAFKA_BROKER);

const kafka = new Kafka({
  clientId: "ddd-posts-api-consumer",
  brokers: [process.env.KAFKA_BROKER as string],
});

export const consumer = kafka.consumer({
  groupId: "ddd-posts-consumer-group",
});

const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const connectKafkaConsumer = async (
  topic: string
): Promise<void> => {
  const maxRetries = 10;
  const retryDelay = 5000;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(
        `🔄 Connecting Kafka Consumer... Attempt ${attempt}/${maxRetries}`
      );

      await consumer.connect();

      await consumer.subscribe({
        topic,
        fromBeginning: true,
      });

      console.log(`✅ Kafka Consumer connected to topic: ${topic}`);

      await consumer.run({
        eachMessage: async ({ message }) => {
          if (!message.value) return;

          const event = JSON.parse(message.value.toString());

          console.log("📩 Event received:", event);
        },
      });

      return;
    } catch (error) {
      console.error(
        `❌ Kafka Consumer connection failed on attempt ${attempt}`
      );

      if (attempt === maxRetries) {
        throw error;
      }

      console.log(`⏳ Retrying in ${retryDelay / 1000} seconds...`);

      try {
        await consumer.disconnect();
      } catch {
        // Ignore disconnect errors during retry
      }

      await sleep(retryDelay);
    }
  }
};
