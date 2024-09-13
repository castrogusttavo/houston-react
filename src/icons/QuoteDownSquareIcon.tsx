import React from 'react'
import { Icon, IconProps } from '../Icon'

export function QuoteDownSquareIcon({
  iconName = 'quote-down-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
