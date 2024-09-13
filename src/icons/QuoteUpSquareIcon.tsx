import React from 'react'
import { Icon, IconProps } from '../Icon'

export function QuoteUpSquareIcon({
  iconName = 'quote-up-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
