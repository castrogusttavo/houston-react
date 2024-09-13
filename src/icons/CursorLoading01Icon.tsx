import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CursorLoading01Icon({
  iconName = 'cursor-loading-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
