import React from 'react'
import { Icon, IconProps } from '../Icon'

export function JoinStraightIcon({
  iconName = 'join-straight',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
