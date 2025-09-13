"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ClientRoleSelect({
  name,
  placeholder,
  roles,
}: {
  name: string
  placeholder: string
  roles: { freelancer: string; client: string; both: string }
}) {
  return (
    <Select name={name} required>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="freelancer">{roles.freelancer}</SelectItem>
        <SelectItem value="client">{roles.client}</SelectItem>
        <SelectItem value="both">{roles.both}</SelectItem>
      </SelectContent>
    </Select>
  )
}

export function ClientTradeTypeSelect({
  name,
  placeholder,
  tradeTypes,
}: {
  name: string
  placeholder: string
  tradeTypes: { export: string; import: string; both: string }
}) {
  return (
    <Select name={name} required>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="export">{tradeTypes.export}</SelectItem>
        <SelectItem value="import">{tradeTypes.import}</SelectItem>
        <SelectItem value="both">{tradeTypes.both}</SelectItem>
      </SelectContent>
    </Select>
  )
}
