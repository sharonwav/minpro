declare module 'midtrans-client' {
    // Declaring the Snap class (example from the midtrans-client API)
    export class Snap {
      constructor();
      pay(data: any): Promise<any>;
      // Add other methods as you learn about them
    }
  
    // Example: Declaring other exports, such as API configuration or classes
    export interface Config {
      serverKey: string;
      clientKey: string;
    }
  
    export const config: Config;
}