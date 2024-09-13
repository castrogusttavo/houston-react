import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ComputerCloudIcon({
  iconName = 'computer-cloud',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
