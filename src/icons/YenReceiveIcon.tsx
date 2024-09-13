import React from 'react'
import { Icon, IconProps } from '../Icon'

export function YenReceiveIcon({
  iconName = 'yen-receive',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
