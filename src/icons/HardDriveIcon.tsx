import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HardDriveIcon({
  iconName = 'hard-drive',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
