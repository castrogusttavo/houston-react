import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ImageDelete01Icon({
  iconName = 'image-delete-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
