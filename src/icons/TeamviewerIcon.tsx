import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TeamviewerIcon({
  iconName = 'teamviewer',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
