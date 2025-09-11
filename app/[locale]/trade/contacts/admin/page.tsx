import { getSubscribers, getMessages } from "../actions"
import { getTranslations } from "next-intl/server"

export default async function AdminPage() {
  const t = await getTranslations("trade.contactsAdmin")
  const subscribers = await getSubscribers()
  const messages = await getMessages()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">
          {t("newsletterSubscribers.title")}
        </h1>
        <p className="text-gray-600 mb-4">
          {t("newsletterSubscribers.total", { count: subscribers.length })}
        </p>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t("newsletterSubscribers.email")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t("newsletterSubscribers.subscriptionDate")}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {subscribers.map((subscriber, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {subscriber.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(subscriber.timestamp).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">
          {t("contactMessages.title")}
        </h2>
        <p className="text-gray-600 mb-4">
          {t("contactMessages.total", { count: messages.length })}
        </p>

        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">
                  {message.firstName} {message.lastName}
                </h3>
                <span className="text-sm text-gray-500">
                  {new Date(message.timestamp).toLocaleDateString()}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <strong>{t("contactMessages.fields.email")}:</strong>{" "}
                  {message.from}
                </div>
                <div>
                  <strong>{t("contactMessages.fields.company")}:</strong>{" "}
                  {message.company}
                </div>
                <div>
                  <strong>{t("contactMessages.fields.tradeType")}:</strong>{" "}
                  {message.tradeType}
                </div>
              </div>
              <div className="text-sm">
                <strong>{t("contactMessages.fields.message")}:</strong>
                <p className="mt-1 text-gray-700">{message.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
