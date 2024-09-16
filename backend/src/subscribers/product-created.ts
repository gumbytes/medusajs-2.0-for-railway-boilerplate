import type {
    SubscriberArgs,
    SubscriberConfig,
  } from "@medusajs/medusa"
  import { Modules } from "@medusajs/utils"
  import { INotificationModuleService } from "@medusajs/types"
  
  export default async function productCreateHandler({
    event: { data },
    container,
  }: SubscriberArgs<{ id: string }>) {
    const notificationModuleService: INotificationModuleService =
      container.resolve(Modules.NOTIFICATION)
  
    await notificationModuleService.createNotifications({
      to: "shamelrazik@gmail.com",
      channel: "email",
      template: "product-created",
      data,
    })
  }
  
  export const config: SubscriberConfig = {
    event: "product.created",
  }