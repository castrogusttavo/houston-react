import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EuroReceiveIcon({
  iconName = 'euro-receive',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
