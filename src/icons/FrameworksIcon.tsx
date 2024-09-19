import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FrameworksIcon({
  iconName = 'frameworks',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
