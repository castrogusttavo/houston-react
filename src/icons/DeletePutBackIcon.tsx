import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DeletePutBackIcon({
  iconName = 'delete-put-back',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
