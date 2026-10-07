import { startServer } from "./app/server";
import connectDatabase from "./infrastructure/database/mongodb";
import { connectKafkaProducer } from "./infrastructure/kafka/kafkaproducer";
import { connectKafkaConsumer } from "./infrastructure/kafka/kafkaconsumer";

async function bootstrap() {
  await connectDatabase();

  await connectKafkaProducer();

  await connectKafkaConsumer("posts");

  startServer();
}

bootstrap();