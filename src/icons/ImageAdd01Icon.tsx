import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ImageAdd01Icon({
  iconName = 'image-add-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
