import React from 'react'
import { Icon, IconProps } from '../Icon'

export function JoinRoundIcon({
  iconName = 'join-round',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
