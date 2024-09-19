import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DeleteColumnIcon({
  iconName = 'delete-column',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
