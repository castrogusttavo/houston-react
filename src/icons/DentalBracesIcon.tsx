import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DentalBracesIcon({
  iconName = 'dental-braces',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
