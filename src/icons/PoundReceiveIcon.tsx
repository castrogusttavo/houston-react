import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PoundReceiveIcon({
  iconName = 'pound-receive',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
