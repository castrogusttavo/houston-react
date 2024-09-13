import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileVideoIcon({
  iconName = 'file-video',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
