import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CommandLineIcon({
  iconName = 'command-line',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
