import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DentalCareIcon({
  iconName = 'dental-care',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
