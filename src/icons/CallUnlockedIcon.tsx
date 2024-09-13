import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallUnlockedIcon({
  iconName = 'call-unlocked',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
