import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PencilEdit01Icon({
  iconName = 'pencil-edit-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
