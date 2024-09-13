import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TShirtIcon({ iconName = 't-shirt', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
