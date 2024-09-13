import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WebProgrammingIcon({
  iconName = 'web-programming',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
