import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ImageRemove01Icon({
  iconName = 'image-remove-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
