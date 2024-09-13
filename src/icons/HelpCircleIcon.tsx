import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HelpCircleIcon({
  iconName = 'help-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
