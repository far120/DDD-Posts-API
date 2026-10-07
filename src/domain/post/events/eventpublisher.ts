export interface EventPublisher {
  publish(topic: string, event: string, data: unknown): Promise<void>;
}