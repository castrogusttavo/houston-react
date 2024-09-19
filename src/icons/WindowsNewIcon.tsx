import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WindowsNewIcon({
  iconName = 'windows-new',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
