import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SchoolBusIcon({
  iconName = 'school-bus',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
