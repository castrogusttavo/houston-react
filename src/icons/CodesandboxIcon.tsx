import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CodesandboxIcon({
  iconName = 'codesandbox',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
