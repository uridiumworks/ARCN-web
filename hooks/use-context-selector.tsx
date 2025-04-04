"use client"

import { useContext, useMemo, useRef } from "react"
import { type useGlobalClientContext, GlobalClientContext } from "@/contexts/GlobalClientContext"
import { isEqual } from "lodash"

/**
 * A hook that allows selecting specific parts of the GlobalClientContext
 * to prevent unnecessary re-renders
 *
 * @param selector Function that selects specific parts of the context
 * @returns The selected part of the context
 */
export function useContextSelector<Selected>(
  selector: (context: ReturnType<typeof useGlobalClientContext>) => Selected,
): Selected {
  const context = useContext(GlobalClientContext)

  if (!context) {
    throw new Error("useContextSelector must be used within a GlobalClientProvider")
  }

  const selectedValue = selector(context as ReturnType<typeof useGlobalClientContext>)
  const prevSelectedValueRef = useRef<Selected>(selectedValue)

  // Only update the reference if the selected value has changed
  const memoizedSelectedValue = useMemo(() => {
    if (!isEqual(selectedValue, prevSelectedValueRef.current)) {
      prevSelectedValueRef.current = selectedValue
    }
    return prevSelectedValueRef.current
  }, [selectedValue])

  return memoizedSelectedValue
}

