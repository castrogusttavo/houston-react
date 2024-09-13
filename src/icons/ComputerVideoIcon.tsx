import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ComputerVideoIcon({
  iconName = 'computer-video',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
