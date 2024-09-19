import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ToolsIcon({ iconName = 'tools-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
