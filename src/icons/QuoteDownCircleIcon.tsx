import React from 'react'
import { Icon, IconProps } from '../Icon'

export function QuoteDownCircleIcon({
  iconName = 'quote-down-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
