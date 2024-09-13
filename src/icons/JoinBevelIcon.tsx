import React from 'react'
import { Icon, IconProps } from '../Icon'

export function JoinBevelIcon({
  iconName = 'join-bevel',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
