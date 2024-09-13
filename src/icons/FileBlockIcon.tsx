import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileBlockIcon({
  iconName = 'file-block',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
