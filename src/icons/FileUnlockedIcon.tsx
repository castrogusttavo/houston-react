import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileUnlockedIcon({
  iconName = 'file-unlocked',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
