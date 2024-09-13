import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CodeCircleIcon({
  iconName = 'code-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
