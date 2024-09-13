import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BodySoapIcon({ iconName = 'body-soap', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
