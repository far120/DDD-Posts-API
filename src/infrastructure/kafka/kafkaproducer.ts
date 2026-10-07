import { Kafka } from "kafkajs";
import type { EventPublisher } from "../../domain/post/events/eventpublisher";
import dotenv from "dotenv";

dotenv.config();

console.log("KAFKA_BROKER:", process.env.KAFKA_BROKER);

const kafka = new Kafka({
  clientId: "ddd-posts-api",
  brokers: [process.env.KAFKA_BROKER as string],
});

export const producer = kafka.producer();

export const connectKafkaProducer = async () => {
  await producer.connect();

  console.log("✅ Kafka Producer connected");
};

export class KafkaEventPublisher implements EventPublisher {
  async publish(
    topic: string,
    event: string,
    data: unknown
  ): Promise<void> {
    await producer.send({
      topic,
      messages: [
        {
          value: JSON.stringify({
            event,
            data,
          }),
        },
      ],
    });
  }
}