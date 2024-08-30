import * as React from "react"
import { Input } from "@/components/ui/input"

export function FilterInput({ table }) {
  return (
    <Input
      placeholder="Filter emails..."
      value={(table.getColumn("email")?.getFilterValue() || "")}
      onChange={(event) =>
        table.getColumn("email")?.setFilterValue(event.target.value)
      }
      className="max-w-sm"
    />
  )
}
