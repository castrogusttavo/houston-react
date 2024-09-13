import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FloppyDiskIcon({
  iconName = 'floppy-disk',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
