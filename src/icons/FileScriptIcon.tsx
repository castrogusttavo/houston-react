import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileScriptIcon({
  iconName = 'file-script',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
