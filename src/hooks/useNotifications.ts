import { notifications } from "@/data/notifications";

export function useNotifications() {
  return {
    notifications,
    unreadCount: notifications.filter((notification) => !notification.read).length
  };
}
