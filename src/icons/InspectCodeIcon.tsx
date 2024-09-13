import React from 'react'
import { Icon, IconProps } from '../Icon'

export function InspectCodeIcon({
  iconName = 'inspect-code',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
