import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileCorruptIcon({
  iconName = 'file-corrupt',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
