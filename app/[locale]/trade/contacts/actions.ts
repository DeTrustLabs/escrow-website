"use server"

// Simple in-memory storage for v0 preview
// In production, you'd use a proper database or file storage
const subscribers: { email: string; timestamp: Date }[] = []
const messages: ContactMessage[] = []

type ContactMessage = {
  from: string
  firstName: string
  lastName: string
  company: string
  tradeType: string
  message: string
  timestamp: Date
}

export async function sendContactMessage(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const company = formData.get("company") as string
  const tradeType = formData.get("tradeType") as string
  const message = formData.get("message") as string

  const messageData = {
    from: email,
    firstName,
    lastName,
    company,
    tradeType,
    message,
    timestamp: new Date(),
  }

  messages.push(messageData)

  console.log(
    "Sending contact message to info@escrow-protocol.com:",
    messageData
  )

  // Simulate email sending delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true, message: "Message sent successfully!" }
}

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return { success: false, message: "Email is required" }
  }

  // Check if already subscribed
  const existingSubscriber = subscribers.find((sub) => sub.email === email)
  if (existingSubscriber) {
    return { success: false, message: "Email already subscribed" }
  }

  // Add to subscribers list
  subscribers.push({
    email,
    timestamp: new Date(),
  })

  console.log("New newsletter subscription:", email)
  console.log("Total subscribers:", subscribers.length)

  // Simulate email sending delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true, message: "Successfully subscribed to newsletter!" }
}

export async function getSubscribers() {
  return subscribers
}

export async function getMessages() {
  return messages
}
