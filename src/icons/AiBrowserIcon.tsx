import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiBrowserIcon({
  iconName = 'ai-browser',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
