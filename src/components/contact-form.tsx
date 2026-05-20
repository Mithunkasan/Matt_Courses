import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-6">
        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-4 py-1 rounded-full">
          EDUCATION FOR EVERYONE
        </span>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-8">For Enquiry You Can Contact</h2>

      <form className="space-y-6">
        <div>
          <Input
            placeholder="Name"
            className="border-0 border-b border-gray-200 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-gray-400"
          />
        </div>

        <div>
          <Input
            type="email"
            placeholder="Email"
            className="border-0 border-b border-gray-200 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-gray-400"
          />
        </div>

        <div>
          <Input
            placeholder="Phone No."
            className="border-0 border-b border-gray-200 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-gray-400"
          />
        </div>

        <div>
          <Input
            placeholder="Your Subject"
            className="border-0 border-b border-gray-200 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-gray-400"
          />
        </div>

        <div>
          <Textarea
            placeholder="Message"
            className="border-0 border-b border-gray-200 rounded-none px-0 py-2 min-h-[100px] focus-visible:ring-0 focus-visible:border-gray-400"
          />
        </div>

        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md">
          CONTACT NOW &gt;&gt;
        </Button>
      </form>
    </div>
  )
}
